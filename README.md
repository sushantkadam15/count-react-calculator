# Count() Calculator App

The **Count() Calculator App** is a straightforward calculator application developed using React. It enables users to carry out fundamental arithmetic operations effortlessly.

## Features

- Perform essential mathematical operations such as addition, subtraction, multiplication, and division.
- Clear entered values to initiate new calculations.
- Responsive design catering to both mobile and desktop platforms.
- Display both input values and operation results in real-time.

## Tech Stack

- **React** - Frontend framework.
- **React Hooks** - Facilitating state management.
- **Tailwind CSS** - Handling the styling aspects.

## Usage

The calculator's interface prominently displays ongoing input values and the outcomes of operations. Numeric buttons facilitate the input of digits. Operator buttons integrate corresponding symbols into both the display and calculations. The equals button triggers computation and exhibits the resulting output. The clear button resets the interface, erasing prior inputs and operations.

![Calculator Preview](/path/to/calculator-screenshot.png)

## Development

This application harnesses the potential of React function components and leverages hooks for efficient state management. The `useState` hook keeps track of the present display value, while the `useRef` hook monitors operational states such as preceding input types.

Reusable components have been devised to represent distinct sections like the display, number pad, and footer. JavaScript's `eval()` function comes into play for executing mathematical operations.

Styling, directly embedded within JSX components, is executed through Tailwind CSS classes.

## Running Locally

To launch this application locally:

1. Clone this repository.
2. Execute `npm install` to incorporate essential dependencies.
3. Initiate the development server with `npm start`.
4. Access the application by opening [http://localhost:3000](http://localhost:3000) in your preferred web browser.
