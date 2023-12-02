export default interface ButtonProps {
    title: string;
    type?: 'whiteBase' | 'blueBase';
    onPress?: () => void;
    fontFamily?: string;
}