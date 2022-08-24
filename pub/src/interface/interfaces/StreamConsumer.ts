
export type IStreamConsumer = {
    onData: (data: string) => void
    onEnd: () => void
}