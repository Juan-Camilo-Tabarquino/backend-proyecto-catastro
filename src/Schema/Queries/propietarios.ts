import { GraphQLList } from 'graphql'
import { Propietarios } from '../../Entities'
import { PropietarioType } from '../TypeDef'

export const GET_ALL_PROPIETARIOS = {
    type: new GraphQLList( PropietarioType ),
    async resolve() {
        return await Propietarios.find();
    }
}