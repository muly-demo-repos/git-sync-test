import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { CustomerCreateInput } from "../customer/base/CustomerCreateInput";

@ArgsType()
class CmCdOne {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    prop1!: string;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    prop2!: number;

    @Field(() => CustomerCreateInput)
    @ApiProperty({
        required: true,
        type: () => CustomerCreateInput
    })
    @Type(() => CustomerCreateInput)
    prop3!: CustomerCreateInput;
}

export { CmCdOne as CmCdOne };