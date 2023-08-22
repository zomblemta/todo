use prisma_client_rust::PrismaClient;

pub fn add(left: usize, right: usize) -> usize {
    left + right
}

pub struct Node {
    db: Arc<PrismaClient>
}

impl  Node {
    pub fn new(self) {
        db
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }
}
