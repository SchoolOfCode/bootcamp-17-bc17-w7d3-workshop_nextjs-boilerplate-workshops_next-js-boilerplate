import Image from 'next/image'

export function ImageCard(props) {
    return (
      <Image
        src={props.src}
        alt={props.alt}
        width={500} 
        height={500} 
      />
    )
}