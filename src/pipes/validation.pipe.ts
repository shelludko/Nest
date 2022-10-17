import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { ValidationException } from '../exceptions/validation.exception';
import { capitalize } from '../users/functions/capitalize.function';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    const obj = plainToClass(metadata.metatype, value);
    const errors = await validate(obj);

    if (errors.length) {
      const messages = errors.map((error) => {
        return `${capitalize(error.property)} - ${Object.values(
          error.constraints,
        ).join(', ')}`;
      });
      throw new ValidationException(messages);
    }
    return value;
  }
}
