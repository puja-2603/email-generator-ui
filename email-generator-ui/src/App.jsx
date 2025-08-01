import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Box,
  CircularProgress,
  Button
} from '@mui/material';

function App() {
  const [emailContent, setEmailcontent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () =>{
    setLoading(true);
    setError('');
    try{
      const response = await axios.post("https://email-generator-api-q9wr.onrender.com/api/email/generate",{emailContent,tone});
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data))

    }catch(error){
      setError('Failed to generate email reply. Please try again');
      console.error(error);
    }
    finally{
        setLoading(false);
    }

  };
return (
  <Container maxWidth="md" sx={{ py: 4 }}>
    <div className="border-animated-card">
      <div className="card-inner">
        <Typography variant='h3' component="h1" gutterBottom>
          Email Reply Generator
        </Typography>

        <Box sx={{ mx: 3 }}>
          <TextField
            fullWidth
            multiline
            rows={6}
            variant='outlined'
            label="Original Email Content"
            value={emailContent}
            onChange={(e) => setEmailcontent(e.target.value)}
            sx={{ mb: 2 }}
          />

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="tone-label">Tone (Optional)</InputLabel>
            <Select
              labelId="tone-label"
              value={tone}
              label="Tone (Optional)"
              onChange={(e) => setTone(e.target.value)}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="professional">Professional</MenuItem>
              <MenuItem value="casual">Casual</MenuItem>
              <MenuItem value="friendly">Friendly</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant='contained'
            onClick={handleSubmit}
            disabled={!emailContent || loading}
            fullWidth
            className={`generate-button ${loading ? 'loading' : ''}`}
          >
            {loading ?  "Generating...": "Generate Reply"}
          </Button>
        </Box>

        {error && (
          <Typography color='error' sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        {generatedReply && (
          <Box sx={{ mt: 3 }}>
            <Typography variant='h6' gutterBottom>Generated Reply:</Typography>
            <TextField
              fullWidth
              multiline
              rows={6}
              variant='outlined'
              value={generatedReply || ''}
              inputProps={{ readOnly: true }}
            />

            <Button
              variant='outlined'
              sx={{ mt: 2 }}
              onClick={() => navigator.clipboard.writeText(generatedReply)}
            >
              Copy to Clipboard
            </Button>
          </Box>
        )}
      </div>
    </div>
  </Container>
);

}

export default App
