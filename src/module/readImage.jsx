import axios from "axios";



const TestApi = () => {
    const add = () => {
        var name = document.getElementById("testName").value;
        axios.create({
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Max-Age": "1800",
                "Access-Control-Allow-Headers": "content-type",
                "Access-Control-Allow-Methods": "PUT, POST, GET, DELETE, PATCH, OPTIONS, PROPFIND"
            }
        })
        axios.post("https://localhost:44357/api/Test", {name}).then((res) => {
            console.log(res);
        });
    };
    return (
        <div className="container mt-12 bg-blue show-down-3xl">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="col-md-12">
                            <div className="w-64 mx-2 my-2 border-2 inline-block">
                                <h5 className="card-title">test</h5>
                                <input id="testName" type="text" />
                                <button
                                    className="btn btn-primary m-1"
                                    onClick={() => add()}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default TestApi;
