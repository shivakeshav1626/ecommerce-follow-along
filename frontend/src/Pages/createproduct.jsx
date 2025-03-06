import React, { useState } from "react";

function Createproduct() {
    const [email, setemil] = useState('')
    const [name, setname] = useState('')
    const [description, setdescription] = useState('')
    const [price, setprice] = setState(0)
    const [stock, setstock] = useState(0)
    const [category, setcategory] = useState('')
    const [tags, settags] = useState([])
    const [images, setimages] = useState([])
    const [previewimage, setpreviewimage] = useState([])

    const categoryData = [{
        title: 'fashion'
    },
    { title: 'electronics' },
    { title: 'stationary' },
    { title: 'home appliance' }
    ]
    const handleimage = (e) => {
        const file = Array.from(e.target.file)
        setimages((previmage) => [...previmages, ...file])
        const preimg = images.map(file => { URL.createObjectURL(file) })
        setImages((prevImages) => [...prevImages, ...file])
        const preImg = images.map(file => { URL.createObjectURL(file) })
        setPreviewImage(prev => [...prev, preImg])
    }
}
return (
    <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Create Product</h1>
        <form className="space-y-4">

            <div>
                <label className="block font-medium">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 w-full rounded"
                    placeholder="Enter your email"
                />
            </div>


            <div>
                <label className="block font-medium">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 w-full rounded"
                    placeholder="Product name"
                />
            </div>


            <div>
                <label className="block font-medium">Description</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border p-2 w-full rounded"
                    placeholder="Product description"
                />
            </div>


            <div>
                <label className="block font-medium">Price</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="border p-2 w-full rounded"
                    placeholder="Product price"
                />
            </div>


            <div>
                <label className="block font-medium">Stock</label>
                <input
                    type="number"
                    value={stock}
                    onChange={(e) => setStock(Number(e.target.value))}
                    className="border p-2 w-full rounded"
                    placeholder="Available stock"
                />
            </div>


            <div>
                <label className="block font-medium">Category</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border p-2 w-full rounded"
                >
                    <option value="">Select Category</option>
                    {categoryData.map((cat, index) => (
                        <option key={index} value={cat.title}>
                            {cat.title}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>Upload Image</label>
                <input type='image' multiple onChange={handleImage} ></input>
            </div>

            <div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700"
                >
                    Create Product
                </button>
            </div>
        </form>
    </div>
);


export default CreateProduct;




