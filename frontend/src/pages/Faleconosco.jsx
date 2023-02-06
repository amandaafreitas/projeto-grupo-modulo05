import "../styles/faleconosco.css";

const Faleconosco = () => {
  return (
    <>
      <div>
        <h1>Entre em contato conosco :</h1>
      </div>
      <div className="teste">
        <form action="" className="test">
          <label htmlFor="nome" className="name">Nome:
          </label>
          <input type="text"
          id="nome"
          placeholder="nome" />
          <label htmlFor="user">Usuário:
          </label>
          <input type="text" 
          id="user"
          placeholder="usuário"/>
          <br></br>
          <div className="teste">
          <h2 className="dois">Qual o motivo?</h2>
         <select name="subject" id="">
         <option value="dúvida">dúvida</option>
         <option value="reclamação">reclamação</option>
         <option value="sugestão">sugestão</option>
         </select><br></br>
         <textarea rows={8} cols={80} placeholder="digite aqui"></textarea>
         <input type="button" value="Enviar" className="button" />
        </div>
        </form>
        </div>
    
    </>
  );
};

export default Faleconosco;

