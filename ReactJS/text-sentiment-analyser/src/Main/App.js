import positivo from './Images/Icons/positivo.png'
import neutro from './Images/Icons/neutro.png'
import negativo from './Images/Icons/negative.png'
import './App.css';

function App() {

    function hideContent() {
        return(
            document.querySelector('.header-text').style.display = 'none',
            document.querySelector('.test-button').style.display = 'none',
            document.querySelector('.form-container').style.opacity = '100%'
        )
    }
    function showResult() {
        return(
            document.querySelector('.form-container').style.display = 'none',
            document.querySelector('.results').style.opacity = '100%'
        )
    }


    return (

        <div class="body">
            <header>
                <h1>Tech Feelings</h1>
                <div class="header-text">
                    <p>Entenda o sentimento social da sua marca, produto ou serviço enquanto monitora as conversas online. A Análise de Sentimento é uma mineração contextual de texto que identifica e extrai informações subjetivas no material de origem.</p>
                </div>
            </header>
            <main>
                <button class="test-button" type="button" onClick={hideContent}>Teste Agora</button>
            </main>
            <div class="form-container">
                <textarea name="" id="text-area" cols="20" rows="1" placeholder="Escreva Aqui"></textarea>
                <button class="analyse-btn" type="button" onClick={showResult}>Analisar</button>
            </div>
            <div class="results">
                <h3>Resultado :</h3>
                <div class="result-image">
                    <img src={positivo} />
                    <h4>Positivo</h4>
                    <img src={neutro} />
                    <h4>Neutro</h4>
                    <img src={negativo} />
                    <h4>Negativo</h4>
                </div>
            </div>
        </div>




    );
}

export default App;
