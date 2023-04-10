import {latexToPython, latexToText, latexToExcel} from './latexToCode';

/*
Need to cover the following cases:
- =, +, -, *, /, ^
- cos, sin, tan, log, ln, sqrt
- arccos, arcsin, arctan
- pi, e
- numbers
- variables
- parentheses
- fractions
- error handling
- order of operations
- implicit multiplication


*/
describe('Conversion to Text', () => { 
    test('a + b', () => {
        expect(latexToText('a + b')).toBe('a + b');
    });
    test('a + b - c * d / e', () => {
        expect(latexToText('a + b - c * d / f')).toBe('(a + b) - ((c * d) / f)');
    });
    test('x = \\frac{-b + \\sqrt{b^2 - 4ac}}{2a}', () => {
        expect(latexToText('x = \\frac{-b + \\sqrt{b^2 - 4ac}}{2a}')).toBe('x = ((-b + sqrt((b ^ 2) - ((4 * a) * c))) / (2 * a))');
    });
    test('\\sin^2(x) + \\cos^2(x) = 1', () => {
        expect(latexToText('(\\sin(x))^2 + (\\cos(x^2))^2')).toBe('(sin(x) ^ 2) + (cos(x ^ 2) ^ 2)');
    });
    test('d = \\sqrt{(x-x)^2 + (y-y)^2}', () => {
        expect(latexToText('d = \\sqrt{(x-x)^2 + (y-y)^2}')).toBe('d = sqrt(((x - x) ^ 2) + ((y - y) ^ 2))');
    });
    test('c =\\sqrt{ a^2 + b^2 - 2ab\\cos(C)}', () => {
        expect(latexToText('c =\\sqrt{ a^2 + b^2 - 2ab\\cos(C)}')).toBe('c = sqrt(((a ^ 2) + (b ^ 2)) - (((2 * a) * b) * cos(C)))');
    });
    test('x = \\sin^{-1}\\left(\\frac{o},{h}\\right)', () => {
        expect(latexToText('x = \\sin^{-1}\\left(\\frac{o}{h}\\right)')).toBe('x = arcsin(o / h)');
    });
    test('x = \\sin(\\pi)', () => {
        expect(latexToText('x = \\sin(\\pi)')).toBe('x = sin(pi)');
    });
    test('y = e^x', () => {
        expect(latexToText('y = e^x')).toBe('y = e^(x)');
    });
 })
 describe('Conversion to Excel', () => { 
    test('a + b', () => {
        expect(latexToExcel('a + b')).toBe('a + b');
    });
    test('a + b - c * d / e', () => {
        expect(latexToExcel('a + b - c * d / f')).toBe('(a + b) - ((c * d) / f)');
    });
    test('x = \\frac{-b + \\sqrt{b^2 - 4ac}}{2a}', () => {
        expect(latexToExcel('x = \\frac{-b + \\sqrt{b^2 - 4ac}}{2a}')).toBe('x = ((-b + sqrt((b ^ 2) - ((4 * a) * c))) / (2 * a))');
    });
    test('\\sin^2(x) + \\cos^2(x) = 1', () => {
        expect(latexToExcel('(\\sin(x))^2 + (\\cos(x^2))^2')).toBe('(sin(x) ^ 2) + (cos(x ^ 2) ^ 2)');
    });
    test('d = \\sqrt{(x-x)^2 + (y-y)^2}', () => {
        expect(latexToExcel('d = \\sqrt{(x-x)^2 + (y-y)^2}')).toBe('d = sqrt(((x - x) ^ 2) + ((y - y) ^ 2))');
    });
    test('c =\\sqrt{ a^2 + b^2 - 2ab\\cos(C)}', () => {
        expect(latexToExcel('c =\\sqrt{ a^2 + b^2 - 2ab\\cos(C)}')).toBe('c = sqrt(((a ^ 2) + (b ^ 2)) - (((2 * a) * b) * cos(C)))');
    });
    test('x = \\sin^{-1}\\left(\\frac{o},{h}\\right)', () => {
        expect(latexToExcel('x = \\sin^{-1}\\left(\\frac{o}{h}\\right)')).toBe('x = asin(o / h)');
    });
    test('x = \\sin(\\pi)', () => {
        expect(latexToExcel('x = \\sin(\\pi)')).toBe('x = sin(pi())');
    });
    test('y = e^x', () => {
        expect(latexToExcel('y = e^x')).toBe('y = exp(x)');
    });
 })
 describe('Conversion to Python', () => { 
    test('a + b', () => {
        expect(latexToPython('a + b')).toBe('a + b');
    });
    test('a + b - c * d / e', () => {
        expect(latexToPython('a + b - c * d / f')).toBe('(a + b) - ((c * d) / f)');
    });
    test('x = \\frac{-b + \\sqrt{b^2 - 4ac}}{2a}', () => {
        expect(latexToPython('x = \\frac{-b + \\sqrt{b^2 - 4ac}}{2a}')).toBe('x = ((-b + math.sqrt((b ** 2) - ((4 * a) * c))) / (2 * a))');
    });
    test('\\sin^2(x) + \\cos^2(x) = 1', () => {
        expect(latexToPython('(\\sin(x))^2 + (\\cos(x^2))^2')).toBe('(math.sin(x) ** 2) + (math.cos(x ** 2) ** 2)');
    });
    test('d = \\sqrt{(x-x)^2 + (y-y)^2}', () => {
        expect(latexToPython('d = \\sqrt{(x-x)^2 + (y-y)^2}')).toBe('d = math.sqrt(((x - x) ** 2) + ((y - y) ** 2))');
    });
    test('c =\\sqrt{ a^2 + b^2 - 2ab\\cos(C)}', () => {
        expect(latexToPython('c =\\sqrt{ a^2 + b^2 - 2ab\\cos(C)}')).toBe('c = math.sqrt(((a ** 2) + (b ** 2)) - (((2 * a) * b) * math.cos(C)))');
    });
    test('x = \\sin^{-1}\\left(\\frac{o},{h}\\right)', () => {
        expect(latexToPython('x = \\sin^{-1}\\left(\\frac{o}{h}\\right)')).toBe('x = math.asin(o / h)');
    });
    test('x = \\sin(\\pi)', () => {
        expect(latexToPython('x = \\sin(\\pi)')).toBe('x = math.sin(math.pi)');
    });
    test('y = e^x', () => {
        expect(latexToPython('y = e^x')).toBe('y = math.exp(x)');
    });
 })