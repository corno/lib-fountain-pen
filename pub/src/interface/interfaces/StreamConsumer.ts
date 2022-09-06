
export type IStreamConsumer = {
    readonly onData: ($: string) => void
    readonly  onEnd: () => void
}