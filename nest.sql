PGDMP     "    
            
    z            nestDb    14.5 (Homebrew)    14.4 5    E           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            F           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            G           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            H           1262    17078    nestDb    DATABASE     S   CREATE DATABASE "nestDb" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';
    DROP DATABASE "nestDb";
                stigmat    false            ?            1259    17122 
   categories    TABLE     ?   CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description text NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.categories;
       public         heap    postgres    false            ?            1259    17121    categories_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.categories_id_seq;
       public          postgres    false    216            I           0    0    categories_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;
          public          postgres    false    215            ?            1259    17477    orders    TABLE     J  CREATE TABLE public.orders (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "totalPrice" integer NOT NULL,
    "createdDate" character varying(255) DEFAULT 1 NOT NULL,
    "isPaid" boolean DEFAULT false NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.orders;
       public         heap    postgres    false            ?            1259    17476    orders_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.orders_id_seq;
       public          postgres    false    220            J           0    0    orders_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;
          public          postgres    false    219            ?            1259    17324    products    TABLE     J  CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description text NOT NULL,
    price integer NOT NULL,
    image character varying(255),
    "categoryId" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.products;
       public         heap    postgres    false            ?            1259    17323    products_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public          postgres    false    218            K           0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
          public          postgres    false    217            ?            1259    17080    roles    TABLE     ?   CREATE TABLE public.roles (
    id integer NOT NULL,
    value character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.roles;
       public         heap    postgres    false            ?            1259    17079    roles_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.roles_id_seq;
       public          postgres    false    210            L           0    0    roles_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;
          public          postgres    false    209            ?            1259    17103 
   user_roles    TABLE     h   CREATE TABLE public.user_roles (
    id integer NOT NULL,
    "userId" integer,
    "roleId" integer
);
    DROP TABLE public.user_roles;
       public         heap    postgres    false            ?            1259    17102    user_roles_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.user_roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.user_roles_id_seq;
       public          postgres    false    214            M           0    0    user_roles_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.user_roles_id_seq OWNED BY public.user_roles.id;
          public          postgres    false    213            ?            1259    17091    users    TABLE     @  CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    banned boolean DEFAULT false,
    "banReason" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            ?            1259    17090    users_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    212            N           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    211            ?           2604    17125    categories id    DEFAULT     n   ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);
 <   ALTER TABLE public.categories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            ?           2604    17480 	   orders id    DEFAULT     f   ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);
 8   ALTER TABLE public.orders ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219    220            ?           2604    17327    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            ?           2604    17083    roles id    DEFAULT     d   ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);
 7   ALTER TABLE public.roles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210            ?           2604    17106    user_roles id    DEFAULT     n   ALTER TABLE ONLY public.user_roles ALTER COLUMN id SET DEFAULT nextval('public.user_roles_id_seq'::regclass);
 <   ALTER TABLE public.user_roles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213    214            ?           2604    17094    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211    212            >          0    17122 
   categories 
   TABLE DATA           U   COPY public.categories (id, name, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    216   ?<       B          0    17477    orders 
   TABLE DATA           o   COPY public.orders (id, "userId", "totalPrice", "createdDate", "isPaid", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    220   Q=       @          0    17324    products 
   TABLE DATA           o   COPY public.products (id, name, description, price, image, "categoryId", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    218   ?=       8          0    17080    roles 
   TABLE DATA           Q   COPY public.roles (id, value, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    210   i?       <          0    17103 
   user_roles 
   TABLE DATA           <   COPY public.user_roles (id, "userId", "roleId") FROM stdin;
    public          postgres    false    214   ??       :          0    17091    users 
   TABLE DATA           c   COPY public.users (id, email, password, banned, "banReason", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    212   !@       O           0    0    categories_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.categories_id_seq', 2, true);
          public          postgres    false    215            P           0    0    orders_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.orders_id_seq', 4, true);
          public          postgres    false    219            Q           0    0    products_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.products_id_seq', 5, true);
          public          postgres    false    217            R           0    0    roles_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.roles_id_seq', 3, true);
          public          postgres    false    209            S           0    0    user_roles_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.user_roles_id_seq', 3, true);
          public          postgres    false    213            T           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 3, true);
          public          postgres    false    211            ?           2606    17129    categories categories_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    216            ?           2606    17484    orders orders_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    220            ?           2606    17331    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    218            ?           2606    17087    roles roles_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    210            ?           2606    17089    roles roles_value_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_value_key UNIQUE (value);
 ?   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_value_key;
       public            postgres    false    210            ?           2606    17108    user_roles user_roles_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT user_roles_pkey;
       public            postgres    false    214            ?           2606    17110 '   user_roles user_roles_userId_roleId_key 
   CONSTRAINT     r   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT "user_roles_userId_roleId_key" UNIQUE ("userId", "roleId");
 S   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT "user_roles_userId_roleId_key";
       public            postgres    false    214    214            ?           2606    17101    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    212            ?           2606    17099    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    212            ?           2606    17485    orders orders_userId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE;
 E   ALTER TABLE ONLY public.orders DROP CONSTRAINT "orders_userId_fkey";
       public          postgres    false    212    3485    220            ?           2606    17332 !   products products_categoryId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.products
    ADD CONSTRAINT "products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public.categories(id) ON UPDATE CASCADE;
 M   ALTER TABLE ONLY public.products DROP CONSTRAINT "products_categoryId_fkey";
       public          postgres    false    218    3491    216            ?           2606    17116 !   user_roles user_roles_roleId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT "user_roles_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES public.roles(id) ON UPDATE CASCADE ON DELETE CASCADE;
 M   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT "user_roles_roleId_fkey";
       public          postgres    false    3479    210    214            ?           2606    17111 !   user_roles user_roles_userId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT "user_roles_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
 M   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT "user_roles_userId_fkey";
       public          postgres    false    212    3485    214            >   ?   x?}???@E??)?CN># d?!	?E@???("E???7?IAs?????????	/???????$???,??Oi1J@?aH??LE?4z??QEo??sO9??SI\29??W???,??<?i-?9{???4/b?r?T:?BCj?eW???_d??Z??-w?      B   ?   x??ͻ?0??Z??}`??)??d???HM?< W,~?G+P?Cy(Tˣ???rcO???S??JD???m??Kkq???	???!}?b=?Ӛ?J?HΉ?o?;?Ɩ??K????4|a<???ע??b1????Rk}?9|      @   o  x?}?Ak1?Ϛ_?cC? ??x<?Ph??Rz???GN?M2?f/??uZ(ɲ????{?????=???-?d??m[?Ӄ????р)??Y?xE?R0TΘs???9?%6N??߂??2?D?2????B?-??H??N?ۭ???1???@??K??2!?5????R?&
^????ow>??IO?ϸ??:???h??}h?»m?w?????a??)?!?d?Ug?0?F ???	?ӿ2?ا??f?+u??=w?r????-4?LPG?)?b"MRm}???Mȋ?3-ĉi?c??fx-u.???z<l?&쾸??q???{#?p?????h?d?y4?PhF?d??|????v?$O?{y?T???]??񡝹      8   |   x?3?tt????tL????,.)J,?/?4202?54?52T0??25?20?3?60?)?e??????韗????P?????? #c=c?A%??9?C?C?}F%????b3??L????qp)?=... ?)4g      <      x?3?4?4?2?B.cN ?????? !??      :   ?   x?}αr?0  ?9??l=C ?Ԋm?j??\"(???wj?b??<???˧c?r??K?+?H*??7w?}??T?X??ń?]?}?l??Ԥ7??dL?????d`?&d????31???#˶??Aj.?+????F?}o???6???fp???b??F?!?n?,o]YM??[??TL9x??KPI[7?b(S?|?]??k:?H|?E?v?:գ??r??5???y}v???j}Ҷ??#?Ù?{!???o?     