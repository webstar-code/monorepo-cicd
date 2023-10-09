interface Props {
  text: string,
}

export function Button({ text }: Props) {
  return <button className="min-w-[250px] p-4 rounded-full">{text}</button>
}