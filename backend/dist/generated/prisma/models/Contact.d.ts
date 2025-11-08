import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type ContactModel = runtime.Types.Result.DefaultSelection<Prisma.$ContactPayload>;
export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null;
    _min: ContactMinAggregateOutputType | null;
    _max: ContactMaxAggregateOutputType | null;
};
export type ContactMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    phone: string | null;
    email: string | null;
    userId: string | null;
    lastInteraction: Date | null;
};
export type ContactMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    phone: string | null;
    email: string | null;
    userId: string | null;
    lastInteraction: Date | null;
};
export type ContactCountAggregateOutputType = {
    id: number;
    name: number;
    phone: number;
    email: number;
    tags: number;
    userId: number;
    lastInteraction: number;
    _all: number;
};
export type ContactMinAggregateInputType = {
    id?: true;
    name?: true;
    phone?: true;
    email?: true;
    userId?: true;
    lastInteraction?: true;
};
export type ContactMaxAggregateInputType = {
    id?: true;
    name?: true;
    phone?: true;
    email?: true;
    userId?: true;
    lastInteraction?: true;
};
export type ContactCountAggregateInputType = {
    id?: true;
    name?: true;
    phone?: true;
    email?: true;
    tags?: true;
    userId?: true;
    lastInteraction?: true;
    _all?: true;
};
export type ContactAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContactWhereInput;
    orderBy?: Prisma.ContactOrderByWithRelationInput | Prisma.ContactOrderByWithRelationInput[];
    cursor?: Prisma.ContactWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ContactCountAggregateInputType;
    _min?: ContactMinAggregateInputType;
    _max?: ContactMaxAggregateInputType;
};
export type GetContactAggregateType<T extends ContactAggregateArgs> = {
    [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContact[P]> : Prisma.GetScalarType<T[P], AggregateContact[P]>;
};
export type ContactGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContactWhereInput;
    orderBy?: Prisma.ContactOrderByWithAggregationInput | Prisma.ContactOrderByWithAggregationInput[];
    by: Prisma.ContactScalarFieldEnum[] | Prisma.ContactScalarFieldEnum;
    having?: Prisma.ContactScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContactCountAggregateInputType | true;
    _min?: ContactMinAggregateInputType;
    _max?: ContactMaxAggregateInputType;
};
export type ContactGroupByOutputType = {
    id: string;
    name: string;
    phone: string;
    email: string;
    tags: string[];
    userId: string | null;
    lastInteraction: Date;
    _count: ContactCountAggregateOutputType | null;
    _min: ContactMinAggregateOutputType | null;
    _max: ContactMaxAggregateOutputType | null;
};
type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContactGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContactGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContactGroupByOutputType[P]>;
}>>;
export type ContactWhereInput = {
    AND?: Prisma.ContactWhereInput | Prisma.ContactWhereInput[];
    OR?: Prisma.ContactWhereInput[];
    NOT?: Prisma.ContactWhereInput | Prisma.ContactWhereInput[];
    id?: Prisma.StringFilter<"Contact"> | string;
    name?: Prisma.StringFilter<"Contact"> | string;
    phone?: Prisma.StringFilter<"Contact"> | string;
    email?: Prisma.StringFilter<"Contact"> | string;
    tags?: Prisma.StringNullableListFilter<"Contact">;
    userId?: Prisma.StringNullableFilter<"Contact"> | string | null;
    lastInteraction?: Prisma.DateTimeFilter<"Contact"> | Date | string;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type ContactOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastInteraction?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.ContactWhereInput | Prisma.ContactWhereInput[];
    OR?: Prisma.ContactWhereInput[];
    NOT?: Prisma.ContactWhereInput | Prisma.ContactWhereInput[];
    name?: Prisma.StringFilter<"Contact"> | string;
    phone?: Prisma.StringFilter<"Contact"> | string;
    tags?: Prisma.StringNullableListFilter<"Contact">;
    userId?: Prisma.StringNullableFilter<"Contact"> | string | null;
    lastInteraction?: Prisma.DateTimeFilter<"Contact"> | Date | string;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id" | "email">;
export type ContactOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastInteraction?: Prisma.SortOrder;
    _count?: Prisma.ContactCountOrderByAggregateInput;
    _max?: Prisma.ContactMaxOrderByAggregateInput;
    _min?: Prisma.ContactMinOrderByAggregateInput;
};
export type ContactScalarWhereWithAggregatesInput = {
    AND?: Prisma.ContactScalarWhereWithAggregatesInput | Prisma.ContactScalarWhereWithAggregatesInput[];
    OR?: Prisma.ContactScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ContactScalarWhereWithAggregatesInput | Prisma.ContactScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Contact"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Contact"> | string;
    phone?: Prisma.StringWithAggregatesFilter<"Contact"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Contact"> | string;
    tags?: Prisma.StringNullableListFilter<"Contact">;
    userId?: Prisma.StringNullableWithAggregatesFilter<"Contact"> | string | null;
    lastInteraction?: Prisma.DateTimeWithAggregatesFilter<"Contact"> | Date | string;
};
export type ContactCreateInput = {
    id?: string;
    name: string;
    phone: string;
    email: string;
    tags?: Prisma.ContactCreatetagsInput | string[];
    lastInteraction?: Date | string;
    user?: Prisma.UserCreateNestedOneWithoutContactsInput;
};
export type ContactUncheckedCreateInput = {
    id?: string;
    name: string;
    phone: string;
    email: string;
    tags?: Prisma.ContactCreatetagsInput | string[];
    userId?: string | null;
    lastInteraction?: Date | string;
};
export type ContactUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ContactUpdatetagsInput | string[];
    lastInteraction?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneWithoutContactsNestedInput;
};
export type ContactUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ContactUpdatetagsInput | string[];
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastInteraction?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContactCreateManyInput = {
    id?: string;
    name: string;
    phone: string;
    email: string;
    tags?: Prisma.ContactCreatetagsInput | string[];
    userId?: string | null;
    lastInteraction?: Date | string;
};
export type ContactUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ContactUpdatetagsInput | string[];
    lastInteraction?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContactUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ContactUpdatetagsInput | string[];
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastInteraction?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContactListRelationFilter = {
    every?: Prisma.ContactWhereInput;
    some?: Prisma.ContactWhereInput;
    none?: Prisma.ContactWhereInput;
};
export type ContactOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type ContactCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lastInteraction?: Prisma.SortOrder;
};
export type ContactMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lastInteraction?: Prisma.SortOrder;
};
export type ContactMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lastInteraction?: Prisma.SortOrder;
};
export type ContactCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ContactCreateWithoutUserInput, Prisma.ContactUncheckedCreateWithoutUserInput> | Prisma.ContactCreateWithoutUserInput[] | Prisma.ContactUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ContactCreateOrConnectWithoutUserInput | Prisma.ContactCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ContactCreateManyUserInputEnvelope;
    connect?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
};
export type ContactUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ContactCreateWithoutUserInput, Prisma.ContactUncheckedCreateWithoutUserInput> | Prisma.ContactCreateWithoutUserInput[] | Prisma.ContactUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ContactCreateOrConnectWithoutUserInput | Prisma.ContactCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ContactCreateManyUserInputEnvelope;
    connect?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
};
export type ContactUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ContactCreateWithoutUserInput, Prisma.ContactUncheckedCreateWithoutUserInput> | Prisma.ContactCreateWithoutUserInput[] | Prisma.ContactUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ContactCreateOrConnectWithoutUserInput | Prisma.ContactCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ContactUpsertWithWhereUniqueWithoutUserInput | Prisma.ContactUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ContactCreateManyUserInputEnvelope;
    set?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
    disconnect?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
    delete?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
    connect?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
    update?: Prisma.ContactUpdateWithWhereUniqueWithoutUserInput | Prisma.ContactUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ContactUpdateManyWithWhereWithoutUserInput | Prisma.ContactUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ContactScalarWhereInput | Prisma.ContactScalarWhereInput[];
};
export type ContactUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ContactCreateWithoutUserInput, Prisma.ContactUncheckedCreateWithoutUserInput> | Prisma.ContactCreateWithoutUserInput[] | Prisma.ContactUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ContactCreateOrConnectWithoutUserInput | Prisma.ContactCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ContactUpsertWithWhereUniqueWithoutUserInput | Prisma.ContactUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ContactCreateManyUserInputEnvelope;
    set?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
    disconnect?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
    delete?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
    connect?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
    update?: Prisma.ContactUpdateWithWhereUniqueWithoutUserInput | Prisma.ContactUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ContactUpdateManyWithWhereWithoutUserInput | Prisma.ContactUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ContactScalarWhereInput | Prisma.ContactScalarWhereInput[];
};
export type ContactCreatetagsInput = {
    set: string[];
};
export type ContactUpdatetagsInput = {
    set?: string[];
    push?: string | string[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type ContactCreateWithoutUserInput = {
    id?: string;
    name: string;
    phone: string;
    email: string;
    tags?: Prisma.ContactCreatetagsInput | string[];
    lastInteraction?: Date | string;
};
export type ContactUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    phone: string;
    email: string;
    tags?: Prisma.ContactCreatetagsInput | string[];
    lastInteraction?: Date | string;
};
export type ContactCreateOrConnectWithoutUserInput = {
    where: Prisma.ContactWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContactCreateWithoutUserInput, Prisma.ContactUncheckedCreateWithoutUserInput>;
};
export type ContactCreateManyUserInputEnvelope = {
    data: Prisma.ContactCreateManyUserInput | Prisma.ContactCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ContactUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ContactWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContactUpdateWithoutUserInput, Prisma.ContactUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ContactCreateWithoutUserInput, Prisma.ContactUncheckedCreateWithoutUserInput>;
};
export type ContactUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ContactWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContactUpdateWithoutUserInput, Prisma.ContactUncheckedUpdateWithoutUserInput>;
};
export type ContactUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ContactScalarWhereInput;
    data: Prisma.XOR<Prisma.ContactUpdateManyMutationInput, Prisma.ContactUncheckedUpdateManyWithoutUserInput>;
};
export type ContactScalarWhereInput = {
    AND?: Prisma.ContactScalarWhereInput | Prisma.ContactScalarWhereInput[];
    OR?: Prisma.ContactScalarWhereInput[];
    NOT?: Prisma.ContactScalarWhereInput | Prisma.ContactScalarWhereInput[];
    id?: Prisma.StringFilter<"Contact"> | string;
    name?: Prisma.StringFilter<"Contact"> | string;
    phone?: Prisma.StringFilter<"Contact"> | string;
    email?: Prisma.StringFilter<"Contact"> | string;
    tags?: Prisma.StringNullableListFilter<"Contact">;
    userId?: Prisma.StringNullableFilter<"Contact"> | string | null;
    lastInteraction?: Prisma.DateTimeFilter<"Contact"> | Date | string;
};
export type ContactCreateManyUserInput = {
    id?: string;
    name: string;
    phone: string;
    email: string;
    tags?: Prisma.ContactCreatetagsInput | string[];
    lastInteraction?: Date | string;
};
export type ContactUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ContactUpdatetagsInput | string[];
    lastInteraction?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContactUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ContactUpdatetagsInput | string[];
    lastInteraction?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContactUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ContactUpdatetagsInput | string[];
    lastInteraction?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContactSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    phone?: boolean;
    email?: boolean;
    tags?: boolean;
    userId?: boolean;
    lastInteraction?: boolean;
    user?: boolean | Prisma.Contact$userArgs<ExtArgs>;
}, ExtArgs["result"]["contact"]>;
export type ContactSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    phone?: boolean;
    email?: boolean;
    tags?: boolean;
    userId?: boolean;
    lastInteraction?: boolean;
    user?: boolean | Prisma.Contact$userArgs<ExtArgs>;
}, ExtArgs["result"]["contact"]>;
export type ContactSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    phone?: boolean;
    email?: boolean;
    tags?: boolean;
    userId?: boolean;
    lastInteraction?: boolean;
    user?: boolean | Prisma.Contact$userArgs<ExtArgs>;
}, ExtArgs["result"]["contact"]>;
export type ContactSelectScalar = {
    id?: boolean;
    name?: boolean;
    phone?: boolean;
    email?: boolean;
    tags?: boolean;
    userId?: boolean;
    lastInteraction?: boolean;
};
export type ContactOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "phone" | "email" | "tags" | "userId" | "lastInteraction", ExtArgs["result"]["contact"]>;
export type ContactInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.Contact$userArgs<ExtArgs>;
};
export type ContactIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.Contact$userArgs<ExtArgs>;
};
export type ContactIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.Contact$userArgs<ExtArgs>;
};
export type $ContactPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Contact";
    objects: {
        user: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        phone: string;
        email: string;
        tags: string[];
        userId: string | null;
        lastInteraction: Date;
    }, ExtArgs["result"]["contact"]>;
    composites: {};
};
export type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ContactPayload, S>;
export type ContactCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContactCountAggregateInputType | true;
};
export interface ContactDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Contact'];
        meta: {
            name: 'Contact';
        };
    };
    findUnique<T extends ContactFindUniqueArgs>(args: Prisma.SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ContactFindFirstArgs>(args?: Prisma.SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ContactFindManyArgs>(args?: Prisma.SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ContactCreateArgs>(args: Prisma.SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ContactCreateManyArgs>(args?: Prisma.SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ContactDeleteArgs>(args: Prisma.SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ContactUpdateArgs>(args: Prisma.SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ContactDeleteManyArgs>(args?: Prisma.SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ContactUpdateManyArgs>(args: Prisma.SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ContactUpsertArgs>(args: Prisma.SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ContactCountArgs>(args?: Prisma.Subset<T, ContactCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContactCountAggregateOutputType> : number>;
    aggregate<T extends ContactAggregateArgs>(args: Prisma.Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>;
    groupBy<T extends ContactGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ContactGroupByArgs['orderBy'];
    } : {
        orderBy?: ContactGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ContactFieldRefs;
}
export interface Prisma__ContactClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.Contact$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Contact$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ContactFieldRefs {
    readonly id: Prisma.FieldRef<"Contact", 'String'>;
    readonly name: Prisma.FieldRef<"Contact", 'String'>;
    readonly phone: Prisma.FieldRef<"Contact", 'String'>;
    readonly email: Prisma.FieldRef<"Contact", 'String'>;
    readonly tags: Prisma.FieldRef<"Contact", 'String[]'>;
    readonly userId: Prisma.FieldRef<"Contact", 'String'>;
    readonly lastInteraction: Prisma.FieldRef<"Contact", 'DateTime'>;
}
export type ContactFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    where: Prisma.ContactWhereUniqueInput;
};
export type ContactFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    where: Prisma.ContactWhereUniqueInput;
};
export type ContactFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    where?: Prisma.ContactWhereInput;
    orderBy?: Prisma.ContactOrderByWithRelationInput | Prisma.ContactOrderByWithRelationInput[];
    cursor?: Prisma.ContactWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContactScalarFieldEnum | Prisma.ContactScalarFieldEnum[];
};
export type ContactFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    where?: Prisma.ContactWhereInput;
    orderBy?: Prisma.ContactOrderByWithRelationInput | Prisma.ContactOrderByWithRelationInput[];
    cursor?: Prisma.ContactWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContactScalarFieldEnum | Prisma.ContactScalarFieldEnum[];
};
export type ContactFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    where?: Prisma.ContactWhereInput;
    orderBy?: Prisma.ContactOrderByWithRelationInput | Prisma.ContactOrderByWithRelationInput[];
    cursor?: Prisma.ContactWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContactScalarFieldEnum | Prisma.ContactScalarFieldEnum[];
};
export type ContactCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContactCreateInput, Prisma.ContactUncheckedCreateInput>;
};
export type ContactCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ContactCreateManyInput | Prisma.ContactCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ContactCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    data: Prisma.ContactCreateManyInput | Prisma.ContactCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ContactIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ContactUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContactUpdateInput, Prisma.ContactUncheckedUpdateInput>;
    where: Prisma.ContactWhereUniqueInput;
};
export type ContactUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ContactUpdateManyMutationInput, Prisma.ContactUncheckedUpdateManyInput>;
    where?: Prisma.ContactWhereInput;
    limit?: number;
};
export type ContactUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContactUpdateManyMutationInput, Prisma.ContactUncheckedUpdateManyInput>;
    where?: Prisma.ContactWhereInput;
    limit?: number;
    include?: Prisma.ContactIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ContactUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    where: Prisma.ContactWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContactCreateInput, Prisma.ContactUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ContactUpdateInput, Prisma.ContactUncheckedUpdateInput>;
};
export type ContactDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    where: Prisma.ContactWhereUniqueInput;
};
export type ContactDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContactWhereInput;
    limit?: number;
};
export type Contact$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type ContactDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
};
export {};
