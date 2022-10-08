import { GraphQLList } from 'graphql'
import { Predios } from '../../Entities'
import { PredioType } from '../TypeDef'

export const GET_ALL_PREDIOS = {
    type: new GraphQLList( PredioType ),
    async resolve() {
        return await Predios.find();
    }
}