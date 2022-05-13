import { Container, Row, Col, Button, FormSelect, FormControl, InputGroup, Form } from "react-bootstrap";

const Search = ({ handleFilter, handleSearch, handleUserInput }) => {
  return (
    <Container>
      <Row>
        <Col sm={2} className="me-0">
          <FormSelect className="me-0" name="filter" id="filter" onInput={(e) => handleFilter(e)}>
            <option>Filter by:</option>
            <option value="restaurant">Name</option>
            <option value="categories">Type</option>
            <option value="city">City</option>
          </FormSelect>
        </Col>
        <Col sm={8} className="ms-0">
          <Form className="ms-0" onSubmit={(e) => handleSearch(e)}>
            <InputGroup>
              <FormControl placeholder="Search" onChange={(e) => handleUserInput(e)} />
              <Button variant="primary" type="submit">
                Search
              </Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Search;
