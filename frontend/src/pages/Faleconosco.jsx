import "../styles/faleconosco.css"

const Faleconosco = () => {
    return (
        <>
        <h1>Entre em contato conosco :
        </h1>
        <div>
         <div>
            <h1>Qual o motivo ?</h1>
            <form action="" id="forma">
            <label htmlFor="subject">Assunto</label>
            <select name="subject" id="">
             <option value="dúvida">dúvida</option>
             <option value="reclamação">reclamação</option>
             <option value="sugestão">sugestão</option>  
            </select>
            <input type="textarea" />
            <input type="button" value="Enviar" />
            </form>

         </div> 
        </div>
        </>

    );
};

export default Faleconosco
