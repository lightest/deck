import { iSlide } from "../types/Talk";

const API = {
    async fetchSlides(talkId:string): Promise<Array<iSlide>>
    {
        return new Promise((res, rej) =>
        {
            res([
                {
                    id: crypto.randomUUID(),
                    img: "./data/p0/slides/slide0.jpg",
                    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros neque, consequat maximus lorem id, convallis tincidunt lacus. Donec porttitor felis orci. Pellentesque facilisis nulla nisi, at varius turpis rutrum in. Quisque vel feugiat orci, et posuere urna. In hac habitasse platea dictumst. Aliquam sagittis erat eu ullamcorper molestie. Nam vel gravida leo, quis volutpat libero. Nunc a velit libero. Nullam venenatis nulla sapien, at suscipit metus vestibulum non. Integer eget neque viverra, hendrerit nisi id, convallis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam feugiat, urna commodo lacinia euismod, nisi metus dignissim enim, nec sollicitudin elit turpis ut nunc. Fusce quis dui id metus dapibus aliquam. Nullam et elit sem. Vivamus lacinia, arcu dapibus feugiat tempor, mauris libero porttitor mi, id bibendum eros ex malesuada tellus."
                },
                {
                    id: crypto.randomUUID(),
                    img: "./data/p0/slides/slide1.jpg",
                    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros neque, consequat maximus lorem id, convallis tincidunt lacus. Donec porttitor felis orci. Pellentesque facilisis nulla nisi, at varius turpis rutrum in. Quisque vel feugiat orci, et posuere urna. In hac habitasse platea dictumst. Aliquam sagittis erat eu ullamcorper molestie. Nam vel gravida leo, quis volutpat libero. Nunc a velit libero. Nullam venenatis nulla sapien, at suscipit metus vestibulum non. Integer eget neque viverra, hendrerit nisi id, convallis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam feugiat, urna commodo lacinia euismod, nisi metus dignissim enim, nec sollicitudin elit turpis ut nunc. Fusce quis dui id metus dapibus aliquam. Nullam et elit sem. Vivamus lacinia, arcu dapibus feugiat tempor, mauris libero porttitor mi, id bibendum eros ex malesuada tellus."
                },
                {
                    id: crypto.randomUUID(),
                    img: "./data/p0/slides/slide2.jpg",
                    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros neque, consequat maximus lorem id, convallis tincidunt lacus. Donec porttitor felis orci. Pellentesque facilisis nulla nisi, at varius turpis rutrum in. Quisque vel feugiat orci, et posuere urna. In hac habitasse platea dictumst. Aliquam sagittis erat eu ullamcorper molestie. Nam vel gravida leo, quis volutpat libero. Nunc a velit libero. Nullam venenatis nulla sapien, at suscipit metus vestibulum non. Integer eget neque viverra, hendrerit nisi id, convallis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam feugiat, urna commodo lacinia euismod, nisi metus dignissim enim, nec sollicitudin elit turpis ut nunc. Fusce quis dui id metus dapibus aliquam. Nullam et elit sem. Vivamus lacinia, arcu dapibus feugiat tempor, mauris libero porttitor mi, id bibendum eros ex malesuada tellus."
                },
                {
                    id: crypto.randomUUID(),
                    img: "./data/p0/slides/slide3.jpg",
                    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros neque, consequat maximus lorem id, convallis tincidunt lacus. Donec porttitor felis orci. Pellentesque facilisis nulla nisi, at varius turpis rutrum in. Quisque vel feugiat orci, et posuere urna. In hac habitasse platea dictumst. Aliquam sagittis erat eu ullamcorper molestie. Nam vel gravida leo, quis volutpat libero. Nunc a velit libero. Nullam venenatis nulla sapien, at suscipit metus vestibulum non. Integer eget neque viverra, hendrerit nisi id, convallis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam feugiat, urna commodo lacinia euismod, nisi metus dignissim enim, nec sollicitudin elit turpis ut nunc. Fusce quis dui id metus dapibus aliquam. Nullam et elit sem. Vivamus lacinia, arcu dapibus feugiat tempor, mauris libero porttitor mi, id bibendum eros ex malesuada tellus."
                },
                {
                    id: crypto.randomUUID(),
                    img: "./data/p0/slides/slide4.jpg",
                    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros neque, consequat maximus lorem id, convallis tincidunt lacus. Donec porttitor felis orci. Pellentesque facilisis nulla nisi, at varius turpis rutrum in. Quisque vel feugiat orci, et posuere urna. In hac habitasse platea dictumst. Aliquam sagittis erat eu ullamcorper molestie. Nam vel gravida leo, quis volutpat libero. Nunc a velit libero. Nullam venenatis nulla sapien, at suscipit metus vestibulum non. Integer eget neque viverra, hendrerit nisi id, convallis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam feugiat, urna commodo lacinia euismod, nisi metus dignissim enim, nec sollicitudin elit turpis ut nunc. Fusce quis dui id metus dapibus aliquam. Nullam et elit sem. Vivamus lacinia, arcu dapibus feugiat tempor, mauris libero porttitor mi, id bibendum eros ex malesuada tellus."
                },
                {
                    id: crypto.randomUUID(),
                    img: "./data/p0/slides/slide5.jpg",
                    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros neque, consequat maximus lorem id, convallis tincidunt lacus. Donec porttitor felis orci. Pellentesque facilisis nulla nisi, at varius turpis rutrum in. Quisque vel feugiat orci, et posuere urna. In hac habitasse platea dictumst. Aliquam sagittis erat eu ullamcorper molestie. Nam vel gravida leo, quis volutpat libero. Nunc a velit libero. Nullam venenatis nulla sapien, at suscipit metus vestibulum non. Integer eget neque viverra, hendrerit nisi id, convallis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam feugiat, urna commodo lacinia euismod, nisi metus dignissim enim, nec sollicitudin elit turpis ut nunc. Fusce quis dui id metus dapibus aliquam. Nullam et elit sem. Vivamus lacinia, arcu dapibus feugiat tempor, mauris libero porttitor mi, id bibendum eros ex malesuada tellus."
                },
                {
                    id: crypto.randomUUID(),
                    img: "./data/p0/slides/slide6.jpg",
                    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros neque, consequat maximus lorem id, convallis tincidunt lacus. Donec porttitor felis orci. Pellentesque facilisis nulla nisi, at varius turpis rutrum in. Quisque vel feugiat orci, et posuere urna. In hac habitasse platea dictumst. Aliquam sagittis erat eu ullamcorper molestie. Nam vel gravida leo, quis volutpat libero. Nunc a velit libero. Nullam venenatis nulla sapien, at suscipit metus vestibulum non. Integer eget neque viverra, hendrerit nisi id, convallis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam feugiat, urna commodo lacinia euismod, nisi metus dignissim enim, nec sollicitudin elit turpis ut nunc. Fusce quis dui id metus dapibus aliquam. Nullam et elit sem. Vivamus lacinia, arcu dapibus feugiat tempor, mauris libero porttitor mi, id bibendum eros ex malesuada tellus."
                },
                {
                    id: crypto.randomUUID(),
                    img: "./data/p0/slides/slide7.jpg",
                    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros neque, consequat maximus lorem id, convallis tincidunt lacus. Donec porttitor felis orci. Pellentesque facilisis nulla nisi, at varius turpis rutrum in. Quisque vel feugiat orci, et posuere urna. In hac habitasse platea dictumst. Aliquam sagittis erat eu ullamcorper molestie. Nam vel gravida leo, quis volutpat libero. Nunc a velit libero. Nullam venenatis nulla sapien, at suscipit metus vestibulum non. Integer eget neque viverra, hendrerit nisi id, convallis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam feugiat, urna commodo lacinia euismod, nisi metus dignissim enim, nec sollicitudin elit turpis ut nunc. Fusce quis dui id metus dapibus aliquam. Nullam et elit sem. Vivamus lacinia, arcu dapibus feugiat tempor, mauris libero porttitor mi, id bibendum eros ex malesuada tellus."
                },
                {
                    id: crypto.randomUUID(),
                    img: "./data/p0/slides/slide8.jpg",
                    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros neque, consequat maximus lorem id, convallis tincidunt lacus. Donec porttitor felis orci. Pellentesque facilisis nulla nisi, at varius turpis rutrum in. Quisque vel feugiat orci, et posuere urna. In hac habitasse platea dictumst. Aliquam sagittis erat eu ullamcorper molestie. Nam vel gravida leo, quis volutpat libero. Nunc a velit libero. Nullam venenatis nulla sapien, at suscipit metus vestibulum non. Integer eget neque viverra, hendrerit nisi id, convallis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam feugiat, urna commodo lacinia euismod, nisi metus dignissim enim, nec sollicitudin elit turpis ut nunc. Fusce quis dui id metus dapibus aliquam. Nullam et elit sem. Vivamus lacinia, arcu dapibus feugiat tempor, mauris libero porttitor mi, id bibendum eros ex malesuada tellus."
                },
                {
                    id: crypto.randomUUID(),
                    img: "./data/p0/slides/slide9.jpg",
                    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros neque, consequat maximus lorem id, convallis tincidunt lacus. Donec porttitor felis orci. Pellentesque facilisis nulla nisi, at varius turpis rutrum in. Quisque vel feugiat orci, et posuere urna. In hac habitasse platea dictumst. Aliquam sagittis erat eu ullamcorper molestie. Nam vel gravida leo, quis volutpat libero. Nunc a velit libero. Nullam venenatis nulla sapien, at suscipit metus vestibulum non. Integer eget neque viverra, hendrerit nisi id, convallis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam feugiat, urna commodo lacinia euismod, nisi metus dignissim enim, nec sollicitudin elit turpis ut nunc. Fusce quis dui id metus dapibus aliquam. Nullam et elit sem. Vivamus lacinia, arcu dapibus feugiat tempor, mauris libero porttitor mi, id bibendum eros ex malesuada tellus."
                }
            ]);
        });
    }
};

export default API;
