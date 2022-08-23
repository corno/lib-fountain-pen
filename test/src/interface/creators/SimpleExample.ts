
export type IStreamConsumer<D, E> = {
    onData: (d: D) => void
    onEnd: (e: E) => void
}

export type CSimpleExample = (
    $i: IStreamConsumer<string, null>,
    $: {},
) => void