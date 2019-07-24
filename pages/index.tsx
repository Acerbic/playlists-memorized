import { Layout, Icon } from "antd";
const { Content, Header, Footer } = Layout;

export default function PageIndex() {
    return (
        <Layout>
            <Header />
            <Content>
                Test
                <Icon type="close-circle" />
            </Content>
            <Footer />
        </Layout>
    );
}
