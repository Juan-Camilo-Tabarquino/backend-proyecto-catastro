import { GraphQLList } from 'graphql'
import { Terrenos } from '../../Entities'
import { TerrenoType } from '../TypeDef'

export const GET_ALL_TERRENOS = {
    type: new GraphQLList( TerrenoType ),
    async resolve() {
        return await Terrenos.find();
    }
}