import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//pages and components
import DisplayInventory from "./pages/DisplayInventory";
import CreateInventory from "./pages/CreateInventory";
import UpdateInventory from "./pages/UpdateInventory";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <BrowserRouter>
            <Col className="p-0 vh-100 sidebar" lg="2">
              <Sidebar />
            </Col>
            <Col className="p-0 vh-100 cmp-background" lg="10">
              <div className="pages">
                <Routes>
                  <Route
                    path="/InventoryManagment"
                    element={<DisplayInventory />}
                  />

                  <Route
                    path="/InventoryManagment/CreateInventory"
                    element={<CreateInventory />}
                  />

                  <Route
                    path="/InventoryManagment/UpdateInventory/:id"
                    element={<UpdateInventory />}
                  />
                </Routes>
              </div>
            </Col>
          </BrowserRouter>
        </Row>
      </Container>
    </div>
  );
}

export default App;
