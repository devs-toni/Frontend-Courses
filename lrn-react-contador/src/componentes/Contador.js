import '../css/Contador.css';

export function Contador ({ numero }) {
    return (
        <div className="contador">
            { numero }
        </div>
    );
}