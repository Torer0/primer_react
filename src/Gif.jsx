export const Gif = ({gif}) => {
    return (
        <img src={gif.images.original.url} alt={gif.tittle}/>
    )
}