import ScrollStack, { ScrollStackItem } from './Atomos/ScrollStack';


const Comparation = () => {
    return (
        <div className=" container relative">
            Por que elegirme 
            <ScrollStack>
            <ScrollStackItem>
                <h2>Experiencia real en diseño y desarrollo web</h2>
                <p>This is the first card in the stack</p>
            </ScrollStackItem>
            <ScrollStackItem>
                <h2>Combino branding + diseño + estrategia</h2>
                <p>This is the second card in the stack</p>
            </ScrollStackItem>
            <ScrollStackItem>
                <h2>Entrego rápido, sin tecnicismos</h2>
                <p>This is the third card in the stack</p>
            </ScrollStackItem>
            </ScrollStack>
        </div>
    )
}

export default Comparation