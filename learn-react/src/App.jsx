import { useState } from 'react'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Box, 
  Button, 
  Card, 
  CardContent, 
  Grid,
  IconButton,
  Stack,
  Chip
} from '@mui/material'
import { 
  Add as AddIcon, 
  Remove as RemoveIcon,
  GitHub as GitHubIcon,
  Code as CodeIcon 
} from '@mui/icons-material'
import WelcomeCard from './components/WelcomeCard'
import FeatureList from './components/FeatureList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* App Bar */}
      <AppBar position="static" sx={{ backgroundColor: '#646cff' }}>
        <Toolbar>
          <CodeIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Learning React with Material UI
          </Typography>
          <IconButton color="inherit" href="https://github.com" target="_blank">
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to React + MUI
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            A modern React application with Material UI components
          </Typography>
          <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 2 }}>
            <Chip label="React 18" color="primary" />
            <Chip label="Material UI 5" color="secondary" />
            <Chip label="Vite" color="success" />
          </Stack>
        </Box>

        {/* Welcome Card */}
        <WelcomeCard />

        {/* Counter Card */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Counter Example
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 3 }}>
                  <IconButton 
                    color="primary" 
                    onClick={() => setCount(count - 1)}
                    size="large"
                  >
                    <RemoveIcon />
                  </IconButton>
                  <Typography variant="h3" sx={{ mx: 4, minWidth: 80, textAlign: 'center' }}>
                    {count}
                  </Typography>
                  <IconButton 
                    color="primary" 
                    onClick={() => setCount(count + 1)}
                    size="large"
                  >
                    <AddIcon />
                  </IconButton>
                </Box>
                <Button 
                  variant="outlined" 
                  fullWidth 
                  onClick={() => setCount(0)}
                >
                  Reset
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Get Started
                </Typography>
                <Typography variant="body1" paragraph>
                  Edit <code>src/App.jsx</code> and save to see HMR in action.
                </Typography>
                <Stack spacing={2}>
                  <Button variant="contained" href="https://react.dev" target="_blank">
                    Learn React
                  </Button>
                  <Button variant="contained" color="secondary" href="https://mui.com" target="_blank">
                    Learn Material UI
                  </Button>
                  <Button variant="outlined" href="https://vite.dev" target="_blank">
                    Learn Vite
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* Feature List */}
          <Grid item xs={12}>
            <FeatureList />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default App

