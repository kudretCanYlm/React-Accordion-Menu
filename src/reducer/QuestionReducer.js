export default function (state = [], action) {
    switch (action) {
        case "list":
            const questions = [
                {
                    id: 1,
                    title: 'Do I have to allow the use of cookies?',
                    content:
                        'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',
                },
                {
                    id: 2,
                    title: 'How do I change my My Page password?',
                    content:
                        'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.',
                },
                {
                    id: 3,
                    title: 'What is BankID?',
                    content:
                        'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.',
                },
                {
                    id: 4,
                    title: 'Whose birth number can I use?',
                    content:
                        'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.',
                },
                {
                    id: 5,
                    title: 'When do I recieve a password ordered by letter?',
                    content:
                        'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ',
                },
            ]
            return questions;

        default:
            break;
    }
}