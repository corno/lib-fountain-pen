
type ITestContext = {
    subset: (
        name: string,
        cb: ($: ITestContext) => void
    ) => void
    testString: (
        $: {
            testName: string,
            actual: string,
            expected: string,
        }
    ) => void
}

export type CRunTests = (
    $i: ITestContext,
    $: {},
) => void
