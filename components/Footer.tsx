import {Section} from "@/components/Section";

export const Footer = () => {
    return (
        <footer className="bg-primary text-primary-foreground">
            <Section className="py-8 text-center">
                <p>&copy; 2024 Planify. All rights reserved.</p>
            </Section>
        </footer>
    );
}

export default Footer;