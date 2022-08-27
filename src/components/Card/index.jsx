import './styles.css';

export function Card(props) {
    return(
        <div className="card">
            <img src="https://source.unsplash.com/random" alt="Random" />
            <strong>
                {props.message}
            </strong>
            <small>
                Enviado por: <br />             
                {props.name}
            </small>
        </div>
    )
}