import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import '../App.css';

class App extends React.Component
{
    state = { videos: [], selectedVideo: null };

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            },
        });
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo:video});
    }

    componentDidMount = () => {
        this.onTermSubmit('cars');
    }

    render() {
        return (
            <div className="container">
                <SearchBar onVideoSearchSubmit={this.onTermSubmit}/>
                <div className="body-w">
                    <div className="f-body-w">
                        <div className="selected-video-w">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="video-list-w">
                            <VideoList videos={this.state.videos}
                                onVideoSelect={this.onVideoSelect} /> 
                        </div>
                    </div>
                </div>        
            </div>
        );
    };
}

export default App; 