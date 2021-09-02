const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const bibliotecaRouter = require("./routes/biblioteca");
const cadastroUsuarioRouter = require("./routes/cadastroUsuario");
const carrinhoRouter = require("./routes/carrinho");
const categoriasRouter = require("./routes/categorias");
const contaRouter = require("./routes/contas");
const erroPagamentoRouter = require("./routes/erroPagamento");
const forumJogoRouter = require("./routes/forumJogo");
const forunsRouter = require("./routes/foruns");
const jogosRouter = require("./routes/jogos");
const metodosPagamentoRouter = require("./routes/metodosPagamento");
const pedidosRouter = require("./routes/pedidos");
const segurancaRouter = require("./routes/seguranca");
const topicoForumRouter = require("./routes/topicoForum");
const transacoesRouter = require("./routes/transacoes");
const usersRouter = require("./routes/users");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/biblioteca", bibliotecaRouter);
app.use("/cadastroUsuario", cadastroUsuarioRouter);
app.use("/carrinho", carrinhoRouter);
app.use("/categorias", categoriasRouter);
app.use("/conta", contaRouter);
app.use("/erroPagamento", erroPagamentoRouter);
app.use("/forumJogo", forumJogoRouter);
app.use("/foruns", forunsRouter);
app.use("/jogo", jogosRouter);
app.use("/metodosPagamento", metodosPagamentoRouter);
app.use("/pedidos", pedidosRouter);
app.use("/seguranca", segurancaRouter);
app.use("/topico", topicoForumRouter);
app.use("/transacoes", transacoesRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
