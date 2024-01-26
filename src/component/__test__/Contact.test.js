import { render, screen } from '@testing-library/react'
import Contact from '../Contact'
import "@testing-library/jest-dom"

test("render the Contact component ", ()=>{
    render(<Contact/>)

   const heading =  screen.getByRole("heading")
   expect(heading).toBeInTheDocument()
})