import { screen, render } from "@testing-library/react" 
import Calculator from "../components/Calculator"


describe("Testando o calculator", () => {

    test("Deve exibir +, -, *, e /",  () => {

        render(<Calculator/>)

        const add = screen.getByText('+')
        const subtract = screen.getByText('-')
        const multiply = screen.getByText('*')
        const divide = screen.getByText('/')

        expect(add).toBeInTheDocument('+')
        expect(subtract).toBeInTheDocument('-')
        expect(multiply).toBeInTheDocument('*')
        expect(divide).toBeInTheDocument('/')
    })
})