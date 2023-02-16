

import * as api from '../api'

import * as mh from "glo-astn-handlers"

export const $$: api.CcreateDummyRequiredValueHandler = () => {

    function createDummyValueHandler<TokenAnnotation>(): mh.IValueHandler<TokenAnnotation> {

        function createDummyObjectHandler(): mh.IObjectHandler<TokenAnnotation> {
            return {
                property: () => {
                    return createDummyRequiredValueHandler()
                },
                anonymousProperty: () => {
                    return createDummyValueHandler()
                },
                onEnd: () => { },
            }
        }
        function createDummyArrayHandler(): mh.IArrayHandler<TokenAnnotation> {
            return {
                element: () => {
                    return createDummyValueHandler()
                },
                onEnd: () => { }
            }
        }
        function createDummyTaggedUnionHandler(): mh.ITaggedUnionHandler<TokenAnnotation> {
            return {
                option: () => createDummyRequiredValueHandler(),
                missingOption: () => createDummyRequiredValueHandler(),
                onEnd: () => { }
            }
        }
        return {
            object: () => {
                return createDummyObjectHandler()
            },
            array: () => {
                return createDummyArrayHandler()
            },
            taggedUnion: () => {
                return createDummyTaggedUnionHandler()
            },
            simpleString: () => {
            },
            multilineString: () => {

            }
        }
    }

    function createDummyRequiredValueHandler<TokenAnnotation>(): mh.IRequiredValueHandler<TokenAnnotation> {
        return {
            missing: () => {
            },
            exists: createDummyValueHandler()
        }

    }
    return createDummyRequiredValueHandler()
}