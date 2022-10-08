import { GraphQLList } from 'graphql'
import { Construcciones } from '../../Entities'
import { ConstruccionType } from '../TypeDef'

export const GET_ALL_CONSTRUCCIONES = {
    type: new GraphQLList( ConstruccionType ),
    async resolve() {
        return await Construcciones.find();
    }
}