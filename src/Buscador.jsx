export const Buscador = ({onSubmit,onChange,valorInput}) => {
    return (
        <form onSubmit={onSubmit}>
            <input value={valorInput} onChange={onChange}  />
        </form>
    )
}