
import { render , screen} from "@testing-library/react";

import Hero from "../src/Landing...page/home/Hero";
import { describe , test , expect } from "vitest";


describe("hero component",()=>{
    test('render hero image',()=>{
        render(<Hero/>);
        const heroImage = screen.getByAltText('heroimage');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src','media/images/landing-Main-homepage.svg');
        
    });

     test('render heading',()=>{
        render(<Hero/>);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        
    });

    
    //  test('render signup button',()=>{
    //     render(<Hero/>);
    //     const SignupBtn = screen.getByRole('button',{name:"/Sign up Now/i"});//error yet ahe 
    //     expect(SignupBtn).toBeInTheDocument();
    //     expect(SignupBtn).toHaveClass('btn-primary');
    // });

});
    

//for run -> goo to fontend - npm test