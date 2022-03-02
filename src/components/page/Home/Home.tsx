import { css } from '@emotion/react';
import Button from '@/components/common/Button';
import ComponentBox from '@/components/common/ComponentBox';

const Home = () => {
  return (
    <main>
      <div css={container}>
        <h2 css={pageTitle}>Buttons</h2>
        <div css={buttonRows}>
          <div css={buttonRow(2)}>
            <ComponentBox title="<Button />" component={<Button />} />
            <ComponentBox
              title="<Button>Register</Button>"
              component={<Button>Register</Button>}
            />
            <ComponentBox
              title='<Button variant="outline" color="primary" />'
              component={<Button variant="outline" color="primary" />}
            />
            <ComponentBox
              title='<Button variant="text" color="primary" />'
              component={<Button variant="text" color="primary" />}
            />
          </div>
          <div css={buttonRow(3)}>
            <ComponentBox
              title='<Button disableShadow color="primary" />'
              component={<Button disableShadow color="primary" />}
            />
            <ComponentBox
              title="<Button disabled>Disabled</Button>"
              component={<Button disabled>Disabled</Button>}
            />
            <ComponentBox
              title='<Button variant="text" disabled>Disabled</Button>'
              component={
                <Button variant="text" disabled>
                  Disabled
                </Button>
              }
            />
          </div>
          <div css={buttonRow(2)}>
            <ComponentBox
              title='<Button startIcon="local_grocery_store" color="primary" />'
              component={
                <Button startIcon="local_grocery_store" color="primary" />
              }
            />
            <ComponentBox
              title='<Button endIcon="local_grocery_store" color="primary" />'
              component={
                <Button endIcon="local_grocery_store" color="primary" />
              }
            />
            <ComponentBox
              title='<Button startIcon="local_shipping" color="primary" />'
              component={<Button startIcon="local_shipping" color="primary" />}
            />
            <ComponentBox
              title='<Button endIcon="add_shopping_cart" color="primary" />'
              component={<Button endIcon="add_shopping_cart" color="primary" />}
            />
            <ComponentBox
              title='<Button endIcon="production_quantity_limits" color="primary" />'
              component={
                <Button endIcon="production_quantity_limits" color="primary" />
              }
            />
            <ComponentBox
              title='<Button startIcon="remove_shopping_cart" color="primary" />'
              component={
                <Button startIcon="remove_shopping_cart" color="primary" />
              }
            />
          </div>
          <div css={buttonRow(3)}>
            <ComponentBox
              title='<Button size="sm" color="primary" />'
              component={<Button size="sm" color="primary" />}
            />
            <ComponentBox
              title='<Button size="md" color="primary" />'
              component={<Button size="md" color="primary" />}
            />
            <ComponentBox
              title='<Button size="lg" color="primary"/>'
              component={<Button size="lg" color="primary" />}
            />
          </div>
          <div css={buttonRow(4)}>
            <ComponentBox
              title='<Button color="default" />'
              component={<Button color="default" />}
            />
            <ComponentBox
              title='<Button color="primary" />'
              component={<Button color="primary" />}
            />
            <ComponentBox
              title='<Button color="secondary" />'
              component={<Button color="secondary" />}
            />
            <ComponentBox
              title='<Button color="danger" />'
              component={<Button color="danger" />}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

const container = css`
  padding: 56px 80px 56px 80px;
  margin: 0 auto;
`;

const pageTitle = css`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  color: #4f4f4f;
`;

const buttonRows = css`
  display: grid;
  grid-row-gap: 45px;
  padding-top: 24px;
`;

const buttonRow = (column: number) => {
  return css`
    display: grid;
    grid-template-columns: repeat(${column}, max-content);
    grid-row-gap: 45px;
    grid-column-gap: 64px;
  `;
};

export default Home;
