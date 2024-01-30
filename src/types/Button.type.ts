export default interface ButtonProps {
    title: string;
    colorBase?: 'whiteBase' | 'blueBase';
    onPress?: () => void;
    fontFamily?: string;
    disabled?: boolean;
    type: 'primary' | 'secondary' | 'tertiary';
}