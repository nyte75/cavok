import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { models } from '../__mocks__/models';
import { ModelsListToolbar } from '../components/modelz/model-list-toolbar';
import { ProductCard } from '../components/product/product-card';
import { DashboardLayout } from '../components/dashboard-layout';

const Models = () => (
  <>
    <Head>
      <title>
        Models | cliBoard
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <ModelsListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {models.map((model) => (
              <Grid
                item
                key={model.id}
                lg={4}
                md={6}
                xs={12}
              >
                <ProductCard product={model} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
);

Models.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Models;
