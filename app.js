function App() {
  const { BrowserRouter, Routes, Route } = ReactRouterDOM;

  return (
    <BrowserRouter data-id="21reh60yk" data-path="app.js">
      <div className="flex flex-col min-h-screen" data-id="t4ffwfhfo" data-path="app.js">
        <Navbar data-id="z743tmzd7" data-path="app.js" />
        <main className="flex-grow" data-id="nxg9j6ym0" data-path="app.js">
          <Routes data-id="q5s0t2bto" data-path="app.js">
            <Route path="/" element={<Home data-id="ssl1fhhuy" data-path="app.js" />} data-id="c6arxh2o2" data-path="app.js" />
            <Route path="/generator" element={<GeneratorPage data-id="gw7gsu84c" data-path="app.js" />} data-id="do3v4gayi" data-path="app.js" />
            <Route path="/history" element={<HistoryPage data-id="3s52n6iix" data-path="app.js" />} data-id="btuaiw21l" data-path="app.js" />
            <Route path="/admin" element={<AdminPage data-id="admin-page" data-path="app.js" />} data-id="50r2k4ejs" data-path="app.js" />
            <Route path="/profile" element={<ProfilePage data-id="profile-page" data-path="app.js" />} data-id="jd83nfh2r" data-path="app.js" />
          </Routes>
        </main>
        <Footer data-id="go10blhxt" data-path="app.js" />
        <CreateTestAdmin data-id="wav4cgatj" data-path="app.js" />
      </div>
    </BrowserRouter>);

}

ReactDOM.render(<App data-id="mf6fv6mzf" data-path="app.js" />, document.getElementById('root'));