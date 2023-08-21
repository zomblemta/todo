use std::{env, net::SocketAddr};

use axum::routing::get;

mod utils;

#[tokio::main]
async fn main() {
    let app = axum::Router::new().route("/health", get(|| async { "OK" }));

    let signal = utils::axum_shutdown_signal();

    let port = env::var("PORT")
        .map(|port| port.parse::<u16>().unwrap_or(8080))
        .unwrap_or(8080);

    let mut addr = "[::]:8080".parse::<SocketAddr>().unwrap();

    addr.set_port(port);
    println!("Listening on http://localhost:{}", port);

    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .with_graceful_shutdown(signal)
        .await
        .expect("Error with HTTP server!");
}
