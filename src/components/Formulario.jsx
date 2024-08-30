import { useForm } from "react-hook-form";

const Formulario = () => {

    const { register, handleSubmit } = useForm();

    return <div>
        <h2>Formulario</h2>
        <form>
            <div>
                <label>Nombre: </label>
                <input type="text" name="" />
            </div>
            <div>
                <label>Dirección: </label>
                <input type="text" name="" />
            </div>
            <div>
                <label>Edad: </label>
                <input type="text" name="" />
            </div>
            <div>
                <label>Nacionalidad: </label>
                <select>
                    <option value="nu">Seleccione una nacionalidad...</option>
                    <option value="co">Colombiana</option>
                    <option value="cu">Estadounidense</option>
                    <option value="es">Española</option>
                    <option value="al">Alemana</option>
                    <option value="it">Italiana</option>
                </select>
            </div>
            <input type="submit" value="ENVIAR"></input>
        </form>
    </div>

}

export default Formulario;