import { screen, render } from "@testing-library/react" 
import Calculator from "../components/Calculator"
import userEvent from "@testing-library/user-event"

describe("Testando o calculator", () => {

    test("Deve exibir +, -, *, e /",  () => {

        render(<Calculator/>)

        const add = screen.getByText('+')
        const subtract = screen.getByText('-')
        const multiply = screen.getByText('*')
        const divide = screen.getByText('/')

        expect(add).toBeInTheDocument()
        expect(subtract).toBeInTheDocument()
        expect(multiply).toBeInTheDocument()
        expect(divide).toBeInTheDocument()
    })

    test("Deve efetuar corretamente a multiplicação de 5 * 2",  async () => {

        const user = userEvent.setup()

        render(<Calculator/>)

        screen.logTestingPlaygroundURL()

        const five = screen.getByRole('button', { name: /5/i})
        const tow = screen.getByRole('button', {name: /2/i})
        const multiply = screen.getByText('*')
        const equal = screen.getByRole('button', {name: /=/i})

        await user.click(five)
        await user.click(multiply)
        await user.click(tow)
        await user.click(equal)

        const result = screen.getByText(/10/i)

        expect(result).toBeInTheDocument()

    })
})