import Image from 'next/image'

export default function Image(props) {
    return (
      <Image
        src={props.search}
        alt={props.alt}
      />
    )
}