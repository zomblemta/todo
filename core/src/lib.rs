use std::sync::Arc;

use axum::{Extension, Router};
use prisma_client_rust;

pub mod api;

pub struct Node {}

impl Node {
    pub async fn new() -> (Arc<Node>, Router) {
       let db: Result<PrismaClient, NewClientError> = Arc::new();

        (Node {}.into(), api::mount(Extension(db)).into())
    }
}
