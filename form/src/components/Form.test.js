import { fireEvent, render, screen } from '@testing-library/react';
import { Form } from './Form';

describe(Form, () => {
    test('Name input should be rendered', () => { 
        render(<Form />);
        const nameInputEl = screen.getByPlaceholderText('Name');
        expect(nameInputEl).toBeInTheDocument()
    })
    
    test('Surname input should be rendered', () => { 
        render(<Form />);
        const surnnameInputEl = screen.getByPlaceholderText('Surname');
        expect(surnnameInputEl).toBeInTheDocument()
    })
    
    test('Age input should be rendered and is type:number', () => { 
        render(<Form />);
        const ageInputEl = screen.getByPlaceholderText('Age');
        expect(ageInputEl).toBeInTheDocument()
        expect(ageInputEl).toHaveAttribute('type', 'number')
    })
    
    test('Email input should be rendered', () => { 
        render(<Form />);
        const emailInputEl = screen.getByPlaceholderText(/Email/i);
        expect(emailInputEl).toBeInTheDocument()
    })
    
    test('Phone input should be rendered and is type:number', () => { 
        render(<Form />);
        const phoneInputEl = screen.getByPlaceholderText(/Phone/i);
        expect(phoneInputEl).toBeInTheDocument()
        expect(phoneInputEl).toHaveAttribute('type', 'number')
    })
    
    test('Select should be rendered', () => { 
        render(<Form />);
        const msgTextareaEl = screen.getByTestId(/subject/i);
        expect(msgTextareaEl).toBeInTheDocument()
    })
    
    test('Message input should be rendered', () => { 
        render(<Form />);
        const msgTextareaEl = screen.getByPlaceholderText(/Message/i);
        expect(msgTextareaEl).toBeInTheDocument()
    })
})
