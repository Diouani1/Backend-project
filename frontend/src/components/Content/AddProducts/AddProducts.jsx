import "./addproducts.css";
import { useContext, useRef } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { DataCenter } from "../../../DataFile";
import { UserDate } from "../../../DateUser";

const AddProducts = () => {
  const { navigate } = useContext(UserDate);

  const { productName, productPrice, productSize, dispatchData, error } =
    useContext(DataCenter);

  function addProductHandeler(e) {
    e.preventDefault();
    dispatchData({ type: "addProduct" });
 

    
  }

  return (
    <div className="addproducts">
      <Form
        style={{ width: "60%", margin: "auto" }}
        onSubmit={addProductHandeler}
      >
        <FormGroup>
          <Label for="exampleNumber">The Name of new Product</Label>
          <Input
            type="text"
            placeholder="write new product with size example : Water 1.5L"
            innerRef={productName}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select The Size</Label>
          <Input
            id="exampleSelect"
            name="select"
            type="select"
            innerRef={productSize}
          >
            <option>0.5 L</option>
            <option>1 L</option>
            <option>1.5 L</option>
            <option>2 L</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="exampleNumber">The Price of new Product</Label>
          <Input
            type="number"
            step={0.01}
            placeholder="write the price"
            innerRef={productPrice}
            required
          />
        </FormGroup>

        <Button
          color="primary"
          tag="input"
          type="submit"
          value="Add new Product"
        />
        {error && <Label className="error">{error} </Label>}
      </Form>
    </div>
  );
};

export default AddProducts;
